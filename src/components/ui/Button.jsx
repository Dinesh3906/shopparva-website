import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

export const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                'group flex items-center justify-center gap-2 transition-all duration-300',
                variant === 'primary' ? 'btn-primary' : 'btn-secondary',
                className
            )}
            {...props}
        >
            {children}
            {Icon && (
                <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
        </motion.button>
    );
};
