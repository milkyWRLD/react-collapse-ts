import React from 'react'
import Collapse from './Collapse'

const App: React.FC = () => {
	return (
		<div className='App'>
			<h1 style={{ textAlign: 'center', marginBottom: '20px' }}>
				Пример компонента Collapse
			</h1>

			<div style={{ maxWidth: '600px', margin: '0 auto' }}>
				<Collapse
					collapsedLabel='Показать больше'
					expandedLabel='Показать меньше'
				>
					<div className='card'>
						Это содержимое первого Collapse компонента. Здесь можно написать что
						угодно, и оно будет скрыто, пока пользователь не развернет его.
					</div>
				</Collapse>

				<Collapse
					collapsedLabel='Открыть детали'
					expandedLabel='Закрыть детали'
				>
					<div className='card'>
						Это второй пример компонента Collapse с другим текстом. Анимация и
						стили остаются такими же, как и для первого компонента.
					</div>
				</Collapse>
			</div>
		</div>
	)
}

export default App
