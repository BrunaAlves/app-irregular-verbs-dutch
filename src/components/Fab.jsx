import React from 'react';
import { FAB} from 'react-native-paper';

export default function Fab(props) {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;


  return (
    <FAB.Group
      open={open}
      icon={open ? 'window-close' : 'plus'}
      actions={[
        {
          icon: 'plus',
          label: 'Add Word',
          onPress: () => props.navigation.navigate('AddWord'),
        },
        {
          icon: 'shuffle-variant',
          label: 'Shuffle Words',
          onPress: () => props.navigation.navigate('CardList', { arrayShuffle: props.arrayShuffle }),

          small: false,
        },
      ]}
      onStateChange={onStateChange}
    />
  );
};
