//
//  Card.swift
//  RecipePage
//
//  Created by User_Kei on 2026/4/9.
//

import SwiftUI

struct FeatureCard: View {
  let iconName: String
  let description: String

  var body: some View {
    HStack {
      Image(systemName: iconName)
        .font(.largeTitle)
        .frame(width: 50)
        .padding()

      Text(description)

      Spacer()
    }
    .padding()
    .background {
      RoundedRectangle(cornerRadius: 12)
        .foregroundStyle(.tint)
        .opacity(0.25)
        .brightness(-0.4)
    }
    .foregroundStyle(.white)
  }
}

#Preview {
  FeatureCard(
    iconName: "person.2.crop.square.stack.fill",
    description: "A multiline description about a feature paired with the image on the left.")
}
