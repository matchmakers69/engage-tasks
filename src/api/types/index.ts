export type Attribute = {
  id: number;
  title: string;
  value: string;
  type: string;
  is_visible: number;
  is_editable: number;
  user_managed: number;
  icon: string;
  display_order: number;
  template: string;
  created_at: string;
  updated_at: string;
};

export type Group = {
  id: number;
  reference: string;
  title: string;
};

export type VisibleToGroup = {
  id: number;
  reference: string;
  title: string;
};

export type User = {
  id: number;
  reference: string;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  department: string;
  manager: string;
  manager_ref: string;
  location_ref: string;
  image: string;
  bio: string;
  date_of_birth: string;
  start_date: string;
  pin: string;
  created_at: string;
  status: number;
  updated_at: string;
  attributes: Attribute[];
  groups: Group[];
  first_name_editable: number;
  lastName_editable: number;
  manager_visible: number;
  date_of_birth_visible: number;
  date_of_birth_editable: number;
  start_date_visible: number;
  start_date_editable: number;
  department_visible: number;
  department_editable: number;
  job_title_visible: number;
  job_title_editable: number;
  email_visible: number;
  email_editable: number;
  bio_visible: number;
  bio_editable: number;
  visible_to_groups: VisibleToGroup[];
};
