import React from 'react'
import Card from './Card'

const Container = (props) => {
    const items = [
        {
          onSale: false,
          altTag: 'blueberries',
          filenameString: 'blueberries.jpg'
        },
        {
          onSale: true,
          altTag: 'leather chair',
          filenameString: 'leather-chair.jpg'
        },
        {
          onSale: false,
          altTag: 'camera',
          filenameString: 'camera.jpg'
        },
        {
          onSale: false,
          altTag: 'orange-chair',
          filenameString: 'orange-chair.jpg'
        },
        {
          onSale: false,
          altTag: 'potted plant',
          filenameString: 'potted-plant.jpg'
        },
        {
          onSale: false,
          altTag: 'wood stool',
          filenameString: 'wood-stool.jpg'
        },
    ]
    
    const cards = items.map((item) => {
        return (
            <Card 
                key={item.altTag}
                item={item}
            />
        )
    })

    return (
        <div className="container">
            {cards}
        </div>
    )
}

export default Container