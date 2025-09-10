import React from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path, Circle, Line } from 'react-native-svg';

interface BottomNavNotchedProps {
  activeTab: 'home' | 'search' | 'filters' | 'profile';
  onTabPress: (tab: 'home' | 'search' | 'filters' | 'profile') => void;
  onCreatePress: () => void;
}

const BottomNavNotched: React.FC<BottomNavNotchedProps> = ({
  activeTab,
  onTabPress,
  onCreatePress,
}) => {
  const insets = useSafeAreaInsets();
  const barHeight = 96;
  const notchRadius = 36;
  const createButtonRadius = 32;
  const barTopRadius = 22;
  const strokeWidth = 1.5;

  // Calculate the notch path
  const screenWidth = 400; // This will be adjusted based on actual screen width
  const centerX = screenWidth / 2;
  const barTopY = 0;
  const notchCenterY = barTopY - 8; // 8dp above bar top
  const notchTopY = notchCenterY - notchRadius;

  // Create the SVG path for the bar with notch
  const createBarPath = () => {
    const leftStart = barTopRadius;
    const rightEnd = screenWidth - barTopRadius;
    
    // Start from left corner
    let path = `M ${leftStart} ${barTopY}`;
    
    // Top edge to notch start
    const notchStartX = centerX - notchRadius;
    path += ` L ${notchStartX} ${barTopY}`;
    
    // Notch arc (concave circle)
    path += ` A ${notchRadius} ${notchRadius} 0 0 1 ${centerX + notchRadius} ${barTopY}`;
    
    // Top edge to right corner
    path += ` L ${rightEnd} ${barTopY}`;
    
    // Right corner arc
    path += ` A ${barTopRadius} ${barTopRadius} 0 0 1 ${screenWidth} ${barTopRadius}`;
    
    // Right edge
    path += ` L ${screenWidth} ${barHeight}`;
    
    // Bottom edge
    path += ` L 0 ${barHeight}`;
    
    // Left edge
    path += ` L 0 ${barTopRadius}`;
    
    // Left corner arc
    path += ` A ${barTopRadius} ${barTopRadius} 0 0 1 ${leftStart} ${barTopY}`;
    
    return path;
  };

  // Icon components
  const HomeIcon = ({ color, size = 28 }: { color: string; size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 22V12H15V22"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const SearchIcon = ({ color, size = 28 }: { color: string; size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle
        cx="11"
        cy="11"
        r="8"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21 21L16.65 16.65"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const FiltersIcon = ({ color, size = 28 }: { color: string; size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M22 3H2L10 12.46V19L14 21V12.46L22 3Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const ProfileIcon = ({ color, size = 28 }: { color: string; size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="12"
        cy="7"
        r="4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const PlusIcon = ({ color, size = 28 }: { color: string; size?: number }) => (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Line
        x1="12"
        y1="5"
        x2="12"
        y2="19"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
      <Line
        x1="5"
        y1="12"
        x2="19"
        y2="12"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
      />
    </Svg>
  );

  return (
    <View style={[styles.container, { paddingBottom: insets.bottom }]}>
      {/* Bar with notch */}
      <View style={styles.barContainer}>
        <Svg
          width="100%"
          height={barHeight}
          style={StyleSheet.absoluteFillObject}
        >
          <Path
            d={createBarPath()}
            fill="#1B2936"
            stroke="#F5F5F5"
            strokeWidth={strokeWidth}
          />
        </Svg>

        {/* Icons */}
        <View style={styles.iconsContainer}>
          {/* Home */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onTabPress('home')}
          >
            <HomeIcon
              color={activeTab === 'home' ? '#00DDD7' : '#FFFFFF'}
            />
          </TouchableOpacity>

          {/* Search */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onTabPress('search')}
          >
            <SearchIcon
              color={activeTab === 'search' ? '#00DDD7' : '#FFFFFF'}
            />
          </TouchableOpacity>

          {/* Spacer for create button */}
          <View style={styles.createButtonSpacer} />

          {/* Filters */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onTabPress('filters')}
          >
            <FiltersIcon
              color={activeTab === 'filters' ? '#00DDD7' : '#FFFFFF'}
            />
          </TouchableOpacity>

          {/* Profile */}
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => onTabPress('profile')}
          >
            <ProfileIcon
              color={activeTab === 'profile' ? '#00DDD7' : '#FFFFFF'}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* Floating Create Button */}
      <TouchableOpacity
        style={[
          styles.createButton,
          {
            bottom: barHeight - createButtonRadius + 16, // 16dp above bar top
          },
        ]}
        onPress={onCreatePress}
      >
        <Svg width={createButtonRadius * 2} height={createButtonRadius * 2}>
          <Circle
            cx={createButtonRadius}
            cy={createButtonRadius}
            r={createButtonRadius}
            fill="#00DDD7"
            stroke="#FFFFFF"
            strokeWidth="2"
          />
          <PlusIcon
            color="#FFFFFF"
            size={28}
            x={createButtonRadius - 14}
            y={createButtonRadius - 14}
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  barContainer: {
    height: 96,
    backgroundColor: '#1B2936',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    height: '100%',
  },
  iconButton: {
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createButtonSpacer: {
    width: 80, // 64 + 16 gap
  },
  createButton: {
    position: 'absolute',
    alignSelf: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.18,
        shadowRadius: 10,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

export default BottomNavNotched;
