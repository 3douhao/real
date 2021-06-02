import create from 'zustand'

const useStore = create(set => ({
  city: '',
  setCity: value => set(() => ({ city: value })),
  cities: [
    {
      title: 'A',
      data: ['Water', 'Coke', 'Beer']
    },
    {
      title: 'B',
      data: [
        '上海',
        '南京',
        '北京',
        '广州',
        '深圳',
        '无锡',
        '柳州',
        '贵州',
        '太原',
        '青岛',
        '大连',
        '合肥',
        '汉口',
        '温州',
        '郑州',
        '南阳',
        '杭州'
      ]
    },
    {
      title: 'C',
      data: [
        'Beijing',
        'Shanghai',
        'Guangzhou',
        'Shenzhen',
        'Beijing',
        'Shanghai',
        'Guangzhou',
        'Shenzhen'
      ]
    }
  ],
  estateName: '',
  setEstateName: value =>
    set(() => ({ estateName: value })),
  estateNames: [
    '豪德山庄',
    '北京印象',
    '金陵上府',
    'beijing',
    'Shanghai'
  ],
  bedroom: '',
  setBedroom: value => set(() => ({ bedroom: value })),
  livingroom: '',
  setLivingroom: value =>
    set(() => ({ livingroom: value })),
  bathroom: '',
  setBathroom: value => set(() => ({ bathroom: value })),
  layout: '',
  setLayout: value => set(() => ({ layout: value })),
  area: '',
  setArea: value => set(() => ({ area: value })),
  floor: '',
  setFloor: value => set(() => ({ floor: value })),
  facing: '',
  setFacing: value => set(() => ({ facing: value })),
  decoration: '',
  setDecoration: value =>
    set(() => ({ decoration: value })),
  type: '',
  setType: value => set(() => ({ type: value })),
  elevator: '有',
  setElevator: value => set(() => ({ elevator: value })),
  price: '',
  setPrice: value => set(() => ({ price: value })),
  name: '',
  setName: value => set(() => ({ name: value })),
  gender: '先生',
  setGender: value => set(() => ({ gender: value })),
  tradingType: '出售',
  setTradingType: value =>
    set(() => ({ tradingType: value }))
}))

export default useStore
