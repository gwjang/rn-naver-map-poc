import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
  NaverMapCircleOverlay,
  NaverMapMarkerOverlay,
  NaverMapPathOverlay,
  NaverMapPolygonOverlay,
  NaverMapView,
  Region
} from "@mj-studio/react-native-naver-map";

const jejuRegion: Region = {
  latitude: 33.20530773,
  longitude: 126.14656715029,
  latitudeDelta: 0.38,
  longitudeDelta: 0.8,
}



export default function App() {
  return (
      <NaverMapView
          style={{ flex: 1 }}
          layerGroups={{
            BUILDING: true,
            BICYCLE: false,
            CADASTRAL: false,
            MOUNTAIN: false,
            TRAFFIC: false,
            TRANSIT: false,
          }}
          initialRegion={jejuRegion}
      >
        <NaverMapMarkerOverlay
            latitude={33.3565607356}
            longitude={126.48599018}
            onTap={() => console.log(1)}
            anchor={{ x: 0.5, y: 1 }}
            caption={{
              key: '1',
              text: 'hello',
            }}
            subCaption={{
              key: '1234',
              text: '123',
            }}
            width={100}
            height={100}
        />
  <NaverMapMarkerOverlay
      latitude={33.2565607356}
      longitude={127.8599018}
      onTap={() => console.log(1)}
      anchor={{ x: 0.5, y: 1 }}
      caption={{
        key: '1',
        text: 'hello',
      }}
      subCaption={{
        key: '1234',
        text: '123',
      }}
      width={100}
      height={100}
      image={{ uri: 'https://picsum.photos/100/100' }}
  />
  <NaverMapCircleOverlay
      latitude={33.17827398}
      longitude={126.349895729}
      radius={50000}
      color={'#f2f1'}
      outlineColor={'#aaa'}
      outlineWidth={2}
      onTap={() => console.log('hi')}
  />
  <NaverMapPolygonOverlay
      outlineWidth={5}
      outlineColor={'#f2f2'}
      color={'#0068'}
      coords={[
        { latitude: 33.2249594, longitude: 126.54180047 },
        { latitude: 33.25683311547, longitude: 126.18193 },
        { latitude: 33.3332807, longitude: 126.838389399 },
      ]}
  />
  <NaverMapPathOverlay
      coords={[
        { latitude: 33.5249594, longitude: 126.24180047 },
        { latitude: 33.25683311547, longitude: 126.18193 },
        { latitude: 33.3332807, longitude: 126.838389399 },
      ]}
      width={8}
      color={'red'}
      progress={-0.6}
      passedColor={'green'}
  />
</NaverMapView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
