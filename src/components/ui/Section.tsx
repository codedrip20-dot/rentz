"use client";

import { ReactNode } from "react";

interface SectionProps {

    title: string;

    description?: string;

    action?: ReactNode;

    children: ReactNode;

    className?: string;

}

const Section = ({
    title,
    description,
    action,
    children,
    className = "",
}: SectionProps) => {

    return (

        <section
            className={`
                space-y-8
                ${className}
            `}
        >

            <div className="flex items-start justify-between gap-4">

                <div>

                    <h2 className="text-2xl font-bold text-slate-900">

                        {title}

                    </h2>

                    {description && (

                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">

                            {description}

                        </p>

                    )}

                </div>

                {action && (

                    <div className="shrink-0">

                        {action}

                    </div>

                )}

            </div>

            <div>

                {children}

            </div>

        </section>

    );

};

export default Section;