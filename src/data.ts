export interface CarouselPicture {
  image: string;
}
export interface Result {
  id: number; event: string; date: string; location: string; placement: string; note: string;
}
export interface Subteam {
  id: number; name: string; description: string;
}

export const robots = [
  {image:'/carousel/picture1.jpg'},
  {image:'/carousel/picture2.jpg'},
  {image:'/carousel/picture3.jpg'},
  {image:'/carousel/picture4.jpg'},
  {image:'/carousel/picture5.jpg'},
]

export const results = [
{id:1, event:'URC Finals', date:'May 2025', location:'Utah, USA', placement:'Top 10', note:'Autonomy checkpoint cleared; high‑score on science task.'},
{id:2, event:'RoboSub', date:'Aug 2024', location:'San Diego, CA', placement:'Semifinalist', note:'Stable navigation, buoy task completed.'},
]

export const subteams = [
{id:1, name:'Mechanical', description:'CAD, machining, DFM, materials, chassis, drivetrains, actuators.'},
{id:2, name:'Electrical', description:'Power, motor drivers, sensor buses, PCBs, harnessing, EMI/EMC.'},
{id:3, name:'Software', description:'Controls, autonomy, perception, embedded, simulation, ops tooling.'}
]