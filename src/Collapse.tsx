import React, { useState } from 'react'
import './Collapse.css'

interface CollapseProps {
	collapsedLabel?: string
	expandedLabel?: string
	children: React.ReactNode
}

const Collapse: React.FC<CollapseProps> = ({
	collapsedLabel = 'Развернуть',
	expandedLabel = 'Свернуть',
	children,
}) => {
	const [isCollapsed, setIsCollapsed] = useState(true)

	const toggleCollapse = () => {
		setIsCollapsed(!isCollapsed)
	}

	return (
		<div className='collapse-container'>
			<button onClick={toggleCollapse} className='collapse-button'>
				{isCollapsed ? collapsedLabel : expandedLabel}
			</button>
			<div
				className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
			>
				{children}
			</div>
		</div>
	)
}

export default Collapse
