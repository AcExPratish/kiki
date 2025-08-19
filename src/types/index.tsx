export interface TSection {
  id?: string;
  label?: string;
}

export interface TService {
  title?: string;
  desc?: string;
  icon?: string;
}

export interface TTeam {
  name?: string;
  role?: string;
  avatar?: string;
}

export interface TStar {
  x: number;
  y: number;
  z: number;
  speed: number;
}
