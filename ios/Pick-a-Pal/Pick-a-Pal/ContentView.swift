//
//  ContentView.swift
//  Pick-a-Pal
//
//  Created by User_Kei on 2026/4/10.
//

import SwiftUI

struct ContentView: View {
  @State private var names: [String] = ["Elisha", "Andre", "Jasmine", "Po-Chun"]
  @State private var nameToAdd = ""
  @State private var pickName = ""
  @State private var shouldRemovePickedName = false
  
  var body: some View {
    VStack {
      VStack(spacing: 8) {
        Image(systemName: "person.3.sequence.fill")
          .foregroundStyle(.tint)
          .symbolRenderingMode(.hierarchical)
        Text("Pick-a-Pal")
      }
      .font(.title)
      .bold()
      
      Text(pickName.isEmpty ? " " : pickName)
        .font(.title)
        .foregroundStyle(.tint)
        .bold()
      
      List {
        ForEach(names, id: \.description) { name in
          Text(name)
        }
      }
      .clipShape(RoundedRectangle(cornerRadius: 8))
      
      TextField("Add Name", text: $nameToAdd)
        .autocorrectionDisabled()
        .onSubmit {
          if !nameToAdd.isEmpty {
            names.append(nameToAdd)
            nameToAdd = ""
          }
        }
      
      Divider()
      
      Toggle("Remove when picked", isOn: $shouldRemovePickedName)
      
      Button {
        if let randomName = names.randomElement() {
          pickName = randomName
          
          if shouldRemovePickedName {
            names.removeAll { name in
              return (name == randomName)
            }
          }
        } else {
          pickName = ""
        }
      } label: {
        Text("Pick Random Name")
          .padding(.vertical, 8)
          .padding(.horizontal, 16)
      }
      .buttonStyle(.borderedProminent)
      .font(.title2)
    }
    .padding()
  }
}

#Preview {
  ContentView()
}
