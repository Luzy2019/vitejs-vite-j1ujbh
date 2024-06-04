export type layoutNode = {
  id: string,
  type: string,
  style: object,
  class: string[],    
  children: layoutNode[],
}