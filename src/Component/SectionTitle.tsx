interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({title}: SectionTitleProps){
    return(
        <div className="text-center mb-12">
         <h2 className="text-center-3xl font-bold"> {title}</h2>
         <div className="w-16 h-1 bg-indigo-500 mx-auto mt-4"></div>

        </div>
    )
}
