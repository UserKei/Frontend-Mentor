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
      
      HStack {
        ForEach(1...numberOfDices, id: \.description) { _ in
          DiceView()
        }
      }
      
      HStack {
        Button("Remove Dice") {
          withAnimation {
            numberOfDices -= 1
          }
        }
        .disabled(numberOfDices == 1)
        
        Button("Add Dice") {
          withAnimation {
            numberOfDices += 1
          }
        }
        .disabled(numberOfDices == 5)
      }
      .padding()
    }
    .padding()
  }
}

#Preview {
  ContentView()
}
