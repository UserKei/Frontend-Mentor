import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: SafeArea(
          child: SingleChildScrollView(
            child: Center(
              child: Container(
                padding: EdgeInsets.symmetric(vertical: 10, horizontal: 10),
                child: Column(
                  children: [
                    Image.asset('assets/images/image-omelette.jpeg'),
                    Padding(
                      padding: EdgeInsetsGeometry.symmetric(),
                      child: Column(
                        children: [
                          Text('Simple Omelette Recipe'),
                          Text(
                            'An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.',
                          ),
                        ],
                      ),
                    ),
                    Container(
                      padding: EdgeInsets.symmetric(),
                      child: Column(children: []),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}
