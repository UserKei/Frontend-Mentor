//
//  ContentView.swift
//  RecipePage
//
//  Created by User_Kei on 2026/4/8.
//

import SwiftUI

struct ContentView: View {
  var body: some View {
    VStack {
      ZStack {
        RoundedRectangle(cornerRadius: 30)
          .frame(width: 150, height: 150)
          .foregroundStyle(Color.blue)

        Image(systemName: "figure.2.and.child.holdinghands")
          .font(.system(size: 60))
          .foregroundStyle(Color.white)
      }

      Text("Welcome to My App")
        .font(.title)
        .fontWeight(.semibold)

      Text("Description text")
        .font(.title2)

    }
    .padding()

  }
}

#Preview {
  ContentView()
}
