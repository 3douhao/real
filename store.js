import create from 'zustand'

const useStore = create(set => ({
  city: '',
  getCity: value => set(() => ({ city: value })),
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
  ]
}))

export default useStore
