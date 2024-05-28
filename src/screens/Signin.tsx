import { VStack, Image } from 'native-base';

import BackgroundImg from '@assets/background.png';

export function Signin() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        resizeMode="stretch"
        position="absolute"
      />
    </VStack>
  );
}
