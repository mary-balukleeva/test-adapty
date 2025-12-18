export const integrationData = {
  badge: "QUICK INTEGRATION",
  title: "Integrate in-app purchases with a few lines of code",
  subtitle: "Integrate IAPs within a few hours without server coding. Adapty handles the correct subscription state, taking everything under the hood, from free trials to refunds, in a simple, developer-friendly SDK.",
  quote: {
    text: "Adapty SDK made integrating in-app purchases a walk in the park. With just a few lines of code, I was able to implement subscriptions seamlessly for both iOS and Android.",
    author: "Magnús Ólafsson",
    role: "Chief Technology Officer at Smitten"
  },
  platforms: [
    {
      name: "Swift",
      icon: "",
      code: `// Your app's code
import Adapty

do {
  try await Adapty.activate("PUBLIC_SDK_KEY")

  // Make a purchase, Adapty handles the rest
  let purchaseResult = try await Adapty.makePurchase(product)
  // successful purchase
} catch {
  // handle the error
}`,
      githubUrl: "https://github.com/adaptyteam/AdaptySDK-iOS"
    },
    {
      name: "Kotlin",
      icon: "🤖",
      code: `// Your app's code
Adapty.activate(this, AdaptyConfig.Builder("YOUR_APP_KEY").build())

// Make a purchase, Adapty handles the rest
Adapty.makePurchase(activity, product) { result ->
    when (result) {
        is AdaptyResult.Success -> {
            if (result.value is AdaptyPurchaseResult.Success)
                // successful purchase
        }
        is AdaptyResult.Error -> {
            // handle the error
        }
    }
}`,
      githubUrl: "https://github.com/adaptyteam/AdaptySDK-Android"
    },
    {
      name: "React Native",
      icon: "⚛️",
      code: `// Your app's code
import { adapty } from 'react-native-adapty';
await adapty.activate('YOUR_APP_KEY');

// Make a purchase, Adapty handles the rest
try {
    const profile = await adapty.makePurchase(product);
    // successful purchase
} catch (error) {
    // handle the error
}`,
      githubUrl: "https://github.com/adaptyteam/adapty-react-native"
    },
    {
      name: "Flutter",
      icon: "🎯",
      code: `// Your app's code
import 'package:adapty_flutter/adapty_flutter.dart';

try {
  await Adapty().activate();

  // Make a purchase, Adapty handles the rest
  final purchaseResult = await Adapty().makePurchase(product: product);
  // successful purchase
} on AdaptyError catch (adaptyError) {
  // handle the error
} catch (error) {
  // handle other errors
}`,
      githubUrl: "https://github.com/adaptyteam/adapty-flutter"
    },
    {
      name: "Unity",
      icon: "🎮",
      code: `// Your app's code
using AdaptySDK;

Adapty.makePurchase(product, (profile, error) => {
    if (error == null) {
        // successful purchase
    }
});`,
      githubUrl: "https://github.com/adaptyteam/AdaptySDK-Unity"
    }
  ],
  sdkPlatforms: [
    { name: "Swift", icon: "" },
    { name: "Kotlin", icon: "🤖" },
    { name: "React Native", icon: "⚛️" },
    { name: "Unity", icon: "🎮" },
    { name: "Flutter", icon: "🎯" },
    { name: "Capacitor", icon: "⚡" },
    { name: "Kotlin Multiplatform", icon: "🔧" },
    { name: "FlutterFlow", icon: "🌊" },
    { name: "Web API", icon: "🌐" },
    { name: "Stripe", icon: "💳" }
  ]
} as const;
