import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';  // Import axios for HTTP requests

import { useFonts } from 'expo-font';  // Import useFonts hook from Expo
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import Toast from 'react-native-toast-message';  // Import Toast component



const OPENAI_API_KEY = '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';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home'); // 'Home', 'Quiz', 'End'
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState(''); // State to store the API response

  const [loading, setLoading] = useState(false); // State to manage loading indicator

  const [fontsLoaded] = useFonts({
    'Traveler': require('./assets/traveler/traveler.ttf'), // Load custom font
  });

  const handleQuestionSubmit = async () => {
    setLoading(true); // Start loading
    Toast.show({
      type: 'info',
      text1: 'Please Wait...',
      text2: 'Your question is being submitted.',
      position: 'top',
    });
    try {
      // Make a POST request to OpenAI API
      const result = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: "gpt-4",
          messages: [{ role: "user", content: question }]
        },
        {
          headers: {
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
            'Content-Type': 'application/json'
          }
        }
      );

      // Set the response from OpenAI
      setResponse(result.data.choices[0].message.content);
      setQuestion(''); // Reset the input field
      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Your question was submitted successfully.',
        position: 'bottom',
        visibilityTime: 4000, // Hide the toast after 3 seconds
      });
    } catch (error) {
      console.error('Error fetching data from OpenAI:', error);
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Failed to submit your question.',
        position: 'bottom',
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    if(loading) {
      Toast.show({
        type: 'info',
        text1: 'Loading',
        text2: 'Please wait...',
        position: 'bottom',
      });
    }
  }, [loading]);

  if (currentScreen === 'Home') {
    return (
      <View style={styles.container}>
      <Image source={require('./assets/transparant/7.png')} style={styles.logoImage} />

        <Text style={styles.logo}>passportGPT</Text>
        <TextInput
          style={styles.input}
          placeholder="Ask a travel question..."
          value={question}
          onChangeText={setQuestion}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleQuestionSubmit}>
          <Text style={styles.searchButtonText}>🔍</Text>
        </TouchableOpacity>
        <ScrollView style={styles.responseContainer}>
          <Text style={styles.responseText}>{response}</Text>
        </ScrollView>
        <StatusBar style="auto" />
        <Toast ref={(ref) => Toast.setRef(ref)} />  {/* Initialize Toast */}

      </View>
    );
  }

  // Other screens (Quiz and End) can be similarly implemented or omitted if not needed for this app's purpose.
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#40dfaf', // Vibrant green for an energetic feel
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffd200', // Black for a strong contrast
    marginBottom: 20,
    fontFamily: 'Traveler', // Use custom font

  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  input: {
    height: 55, // Slightly increased height for better interaction
    width: '90%',
    borderColor: '#40dfaf', // Matching border to the background
    borderWidth: 2,
    borderRadius: 30, // Slightly increased border radius for a smoother look
    paddingHorizontal: 25, // Increased padding for better text alignment
    fontSize: 18,
    fontWeight: '500', // Medium weight for clear text
    backgroundColor: '#FFF',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 }, // Increased shadow offset for a more pronounced effect
    shadowOpacity: 0.15, // Increased shadow opacity for more depth
    shadowRadius: 5, // Increased shadow radius for a softer shadow
    elevation: 3,
    color: 'black', // Ensure the text color is easy to read
    letterSpacing: 1, // Slight letter spacing for improved readability
  },
  
  searchButton: {
    backgroundColor: '#ffd200', // Yellow for a high-visibility CTA
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  searchButtonText: {
    fontSize: 20,
    color: 'black', // Black text for strong contrast on yellow
    fontWeight: 'bold',
    textTransform: 'uppercase', // Add uppercase styling for emphasis
    letterSpacing: 1.5, // Improve readability and aesthetic
  },
  responseContainer: {
    marginTop: 20,
    width: '90%',
    maxHeight: 200,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  responseText: {
    fontSize: 18, // Increase font size for better readability
    color: 'black', // Black text for clarity
    lineHeight: 24, // Increase line height for better readability
    fontWeight: '500', // Use medium weight for clear text
  },
});
