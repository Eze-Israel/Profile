import Image from "next/image";

interface ProjectCardProps {
title: string;
description: string;
imageUrl: string;
technologies: string[];
}

export default function ProjectCard({
      title,
      description,
      imageUrl,
      technologies,                                                                           
}: ProjectCardProps) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                src={imageUrl}
                alt={title}
                layout="fill" objectFit="cover" />
            </div>
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
               {title}
                </h3>
                <p className="text-gray-600 m-4"> {description}</p>
                <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                        <span key={index}
                        className="bg-gray-200 text:sm font-medium px-2 py-1"
                        >
                            {tech}

                        </span>
                    ))}

                </div>

            </div>

        </div>
    )
}