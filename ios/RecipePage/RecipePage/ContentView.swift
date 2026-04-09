//
//  ContentView.swift
//  RecipePage
//
//  Created by User_Kei on 2026/4/8.
//

import SwiftUI

struct ContentView: View {
  var body: some View {
    TabView {
      WelcomePage()
      FeaturesPage()
    }
    .tabViewStyle(.page)
  }
}

#Preview {
  ContentView()
}
