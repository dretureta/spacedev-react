import React from 'react';
import Header from './components/Header/Header';
import ArticleList from './components/ArticlesList/ArticlesList';

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<ArticleList />
		</div>
	);
};

export default App;
