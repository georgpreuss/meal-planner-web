import React from 'react'

interface Props {
    name: string
    images: string[]
    description: string
}

const RecipeCard: React.FC<Props> = ({ name, images, description }) => {
    return (
        <div className="bg-gray-800 text-gray-100 shadow-xl max-w-sm cursor-pointer opacity-80 hover:opacity-100">
            <div className="">
                <img src={images[0]} alt="" className="h-56 w-full" />
            </div>
            <div className="px-4 py-4 md:px-10">
                <h1 className="font-bold text-lg">{name}</h1>
                <p className="py-4">{description}</p>
                <div className="flex flex-wrap pt-8">
                    <div className="w-full md:w-2/3 text-sm font-medium text-gray-500">
                        NOVEMBER 1,2019
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeCard
