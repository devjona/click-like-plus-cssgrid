import React from 'react'
import Card from './Card'

const Container = (props) => {
    const items = [
        {
          onSale: false,
          altTag: 'blueberries',
          filenameString: 'blueberries.jpg',
          tag: 'desserts',
          title: 'Blueberries in Mug'
        },
        {
          onSale: true,
          altTag: 'leather chair',
          filenameString: 'leather-chair.jpg',
          tag: 'furniture',
          title: 'Leather Chair'
        },
        {
          onSale: false,
          altTag: 'camera',
          filenameString: 'camera.jpg',
          tag: 'electronics',
          title: 'Camera'
        },
        {
          onSale: false,
          altTag: 'orange-chair',
          filenameString: 'orange-chair.jpg',
          tag: 'furniture',
          title: 'Orange Chair'
        },
        {
          onSale: false,
          altTag: 'potted plant',
          filenameString: 'potted-plant.jpg',
          tag: 'plants',
          title: 'Potted Plants'
        },
        {
          onSale: true,
          altTag: 'wood stool',
          filenameString: 'wood-stool.jpg',
          tag: 'furniture',
          title: 'Wood Stool'
        }
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