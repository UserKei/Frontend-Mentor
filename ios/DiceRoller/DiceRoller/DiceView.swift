//
//  DiceView.swift
//  DiceRoller
//
//  Created by User_Kei on 2026/4/10.
//

import SwiftUI

struct DiceView: View {
  @State private var numberOfPips: Int = 1
  
  var body: some View {
    VStack {
      Image(systemName: "die.face.\(numberOfPips)")
        .resizable()
        .frame(maxWidth: 100, maxHeight: 100)
        .aspectRatio(1, contentMode: .fit)
      
      Button("Roll") {
        withAnimation {
          numberOfPips = Int.random(in: 1...6)
        }
      }
      .buttonStyle(.bordered)
    }
  }
}

#Preview {
  DiceView()
}
