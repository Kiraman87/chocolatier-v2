'use client'

import { Button, Card, DatePicker, Input, Table, Tag } from 'antd'
import { ShoppingCart, Star, ArrowRight } from 'lucide-react'

// Demo component showing Ant Design integration
export default function AntdDemo() {
  const columns = [
    {
      title: 'Produit',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Prix',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Statut',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => (
        <Tag color={status === 'Disponible' ? '#c9a962' : '#6b6b6b'}>
          {status}
        </Tag>
      ),
    },
  ]

  const data = [
    { key: '1', name: 'Ganache Noir', price: '24€', status: 'Disponible' },
    { key: '2', name: 'Praliné Noisettes', price: '22€', status: 'Disponible' },
    { key: '3', name: 'Truffe Champagne', price: '28€', status: 'Rupture' },
  ]

  return (
    <div className="p-8 space-y-8">
      <h2 className="font-display text-3xl text-[#1a1a1a] mb-6">
        Composants Ant Design
      </h2>

      {/* Buttons */}
      <div className="space-y-4">
        <h3 className="font-label text-[#c9a962]">BOUTONS</h3>
        <div className="flex gap-4">
          <Button type="primary" icon={<ShoppingCart size={16} />}>
            Ajouter au panier
          </Button>
          <Button icon={<Star size={16} />}>
            Favoris
          </Button>
          <Button type="dashed" icon={<ArrowRight size={16} />}>
            Voir plus
          </Button>
        </div>
      </div>

      {/* Input */}
      <div className="space-y-4">
        <h3 className="font-label text-[#c9a962]">FORMULAIRE</h3>
        <div className="max-w-md space-y-4">
          <Input placeholder="Votre nom" size="large" />
          <Input placeholder="votre@email.com" size="large" />
          <DatePicker placeholder="Date de livraison" style={{ width: '100%' }} />
        </div>
      </div>

      {/* Card */}
      <div className="space-y-4">
        <h3 className="font-label text-[#c9a962]">CARTE PRODUIT</h3>
        <Card title="Coffret Découverte" extra={<span className="text-[#c9a962] font-bold">65€</span>}>
          <p>Sélection de 24 pièces, voyage à travers nos saveurs</p>
          <Button type="primary" className="mt-4">
            Commander
          </Button>
        </Card>
      </div>

      {/* Table */}
      <div className="space-y-4">
        <h3 className="font-label text-[#c9a962]">TABLEAU</h3>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  )
}
