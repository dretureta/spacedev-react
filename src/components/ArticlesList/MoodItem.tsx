import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MoodItem = props => {
	return (
		<li value='Positive' onClick={() => props.click()}>
			<FontAwesomeIcon icon={props.icon} color={props.color} size='2x' />
			{props.mood}
		</li>
	);
};

export default MoodItem;
