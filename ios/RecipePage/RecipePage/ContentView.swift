//
//  ContentView.swift
//  RecipePage
//
//  Created by User_Kei on 2026/4/8.
//

import SwiftUI

let gradientColors: [Color] = [
  .gradientTop,
  .gradientBottom,
]

struct ContentView: View {
  var body: some View {
    TabView {
      WelcomePage()
      FeaturesPage()
    }
    .background(Gradient(colors: gradientColors))
    .tabViewStyle(.page)
    .foregroundStyle(.white)
  }
}

#Preview {
  ContentView()
}
