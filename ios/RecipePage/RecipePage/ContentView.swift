//
//  ContentView.swift
//  RecipePage
//
//  Created by User_Kei on 2026/4/8.
//

import SwiftUI

struct ContentView: View {
  var body: some View {
    HStack {
      DayForcast(day: "Mon", isRainy: false, high: 70, low: 50)
      DayForcast(day: "Tun", isRainy: true, high: 60, low: 40)
    }
  }
}

struct DayForcast: View {
  let day: String
  let isRainy: Bool
  let high: Int
  let low: Int

  var iconName: String {
    if isRainy {
      return "cloud.rain.fill"
    } else {
      return "sun.max.fill"
    }
  }

  var iconColor: Color {
    if isRainy {
      return Color.blue
    } else {
      return Color.yellow
    }
  }

  var body: some View {
    VStack {
      Text(day)
        .font(Font.headline)
      Image(systemName: iconName)
        .foregroundStyle(iconColor)
        .font(Font.largeTitle)
        .padding()
      Text("High: \(high)")
      Text("Low: \(low)")
    }
    .padding()
  }
}

#Preview {
  ContentView()
}
