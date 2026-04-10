//
//  ContentView.swift
//  DiceRoller
//
//  Created by User_Kei on 2026/4/10.
//

import SwiftUI

struct ContentView: View {
  @State private var numberOfDices: Int = 1
  
  var body: some View {
    VStack {
      Text("Dice Roller")
        .font(.largeTitle.lowercaseSmallCaps())
        .foregroundStyle(.white)
      
      HStack {
        ForEach(1...numberOfDices, id: \.description) { _ in
          DiceView()
        }
      }
      
      HStack {
        Button("Remove Dice", systemImage: "minus.circle.fill") {
          withAnimation {
            numberOfDices -= 1
          }
        }
        .disabled(numberOfDices == 1)
        .labelStyle(.iconOnly)
        .font(.title)
        
        Button("Add Dice", systemImage: "plus.circle.fill") {
          withAnimation {
            numberOfDices += 1
          }
        }
        .disabled(numberOfDices == 5)
        .labelStyle(.iconOnly)
        .font(.title)
      }
      .padding()
    }
    .padding()
    .frame(maxWidth: .infinity, maxHeight: .infinity)
    .background(.appBackground)
    .tint(.white)
  }
}

#Preview {
  ContentView()
}
