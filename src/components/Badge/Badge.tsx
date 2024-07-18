import React from 'react';
import './index.css';
import { BadgeProps } from './type';

const Badge: React.FC<BadgeProps> = ({ message, type = 'info', icon, onClose, backgroundColor, textColor, count ,style }) => {
    const defaultColors = {
        info: { background: '#17a2b8', text: '#fff' },
        success: { background: '#28a745', text: '#fff' },
        warning: { background: '#ffc107', text: '#212529' },
        error: { background: '#dc3545', text: '#fff' },
        custom: { background: backgroundColor, text: textColor },
    };

    const currentColors = defaultColors[type] || defaultColors.info;
    const badgeStyle = {
        backgroundColor: backgroundColor || currentColors.background,
        color: textColor || currentColors.text,
    };

    return (
        <span className={`badge badge-${type} ${style}`} style={badgeStyle}>
            {icon && <span className="badge-icon">{icon}</span>}
            {count !== undefined && <span className="badge-count">{count}</span>}
            {message}
            {onClose && (
                <button className="badge-close" onClick={onClose}>
                    &times;
                </button>
            )}
        </span>
    );
};

export default Badge;
