import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Alert } from 'react-native';
import BottomNavNotched from '../../components/BottomNavNotched';

const NotchedNavExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'home' | 'search' | 'filters' | 'profile'>('home');

  const handleTabPress = (tab: 'home' | 'search' | 'filters' | 'profile') => {
    setActiveTab(tab);
    Alert.alert('Tab Pressed', `You pressed the ${tab} tab`);
  };

  const handleCreatePress = () => {
    Alert.alert('Create Pressed', 'You pressed the create (+) button');
  };

  const getTabContent = () => {
    switch (activeTab) {
      case 'home':
        return {
          title: 'Home',
          content: 'Welcome to the Home screen! This is where your main content would go.',
          color: '#00DDD7',
        };
      case 'search':
        return {
          title: 'Search',
          content: 'Search functionality would be implemented here. Look for anything you need!',
          color: '#FFFFFF',
        };
      case 'filters':
        return {
          title: 'Filters',
          content: 'Filter options and settings would be available here.',
          color: '#FFFFFF',
        };
      case 'profile':
        return {
          title: 'Profile',
          content: 'User profile information and settings would be displayed here.',
          color: '#FFFFFF',
        };
      default:
        return {
          title: 'Home',
          content: 'Welcome to the Home screen!',
          color: '#00DDD7',
        };
    }
  };

  const currentTab = getTabContent();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: currentTab.color }]}>
          {currentTab.title}
        </Text>
        <Text style={styles.description}>
          {currentTab.content}
        </Text>
        
        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>Notched Bottom Navigation Features:</Text>
          <Text style={styles.infoText}>• Dark bar with concave circular notch</Text>
          <Text style={styles.infoText}>• Floating create (+) button in the notch</Text>
          <Text style={styles.infoText}>• Four navigation icons with proper spacing</Text>
          <Text style={styles.infoText}>• Home icon highlighted in turquoise when active</Text>
          <Text style={styles.infoText}>• Proper shadows and safe area handling</Text>
          <Text style={styles.infoText}>• Built with react-native-svg for crisp graphics</Text>
        </View>

        <View style={styles.specsContainer}>
          <Text style={styles.specsTitle}>Technical Specs:</Text>
          <Text style={styles.specsText}>• Bar height: 96dp</Text>
          <Text style={styles.specsText}>• Notch radius: 36dp</Text>
          <Text style={styles.specsText}>• Create button radius: 32dp</Text>
          <Text style={styles.specsText}>• Background: #1B2936</Text>
          <Text style={styles.specsText}>• Active color: #00DDD7</Text>
          <Text style={styles.specsText}>• Inactive color: #FFFFFF</Text>
        </View>
      </View>

      <BottomNavNotched
        activeTab={activeTab}
        onTabPress={handleTabPress}
        onCreatePress={handleCreatePress}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
    paddingBottom: 120, // Space for the bottom navigation
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 24,
  },
  infoContainer: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    lineHeight: 20,
  },
  specsContainer: {
    backgroundColor: '#1B2936',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  specsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#FFFFFF',
  },
  specsText: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default NotchedNavExample;
