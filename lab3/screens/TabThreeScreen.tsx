import { ActivityIndicator, Image } from 'react-native';
import styles from './styles';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Text, View } from '../components/Themed';
import React from 'react';

export default function TabThreeScreen() {
    return (
        <View style={styles.container}>
          <View style={styles.stepGallery}>  
              
          <ProgressSteps>
        <ProgressStep label="First Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Step 1</Text>
                <ActivityIndicator size="small" color="red"/>
                <Text style={{ fontSize: 20 }}>
                Updating Kernel
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Second Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Step 2</Text>
                <ActivityIndicator size="large" color="yellow"/>
                <Text style={{ fontSize: 30 }}>
                Updating UI
                </Text>
            </View>
        </ProgressStep>
        <ProgressStep label="Third Step">
            <View style={{ alignItems: 'center' }}>
                <Text>Step 3</Text>
                <ActivityIndicator size="large" color="green"/>
                <Text style={{ fontSize: 30,color:"green" }}>
                Update finished
                </Text>
            </View>
        </ProgressStep>
    </ProgressSteps>
          
          </View>
        </View>
      );
}
