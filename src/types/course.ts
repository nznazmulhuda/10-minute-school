export interface ApiResponse {
  code: number;
  data: Data;
  error: any[];
  message: string;
  payload: any[];
  status_code: number;
}

export interface Data {
  slug: string;
  id: number;
  title: string;
  description: string;
  platform: string;
  type: string;
  modality: string;
  old_info: OldInfo;
  start_at: string;
  media: Medium[];
  checklist: Checklist[];
  seo: [];
  cta_text: CtaText;
  sections: Section[];
  is_cohort_based_course: boolean;
  secondary_cta_group: any[];
  delivery_method: string;
}

export interface OldInfo {
  cat_id: number;
  course_id: number;
  platform: string;
  skills_cat_id: number;
  slug: string;
}

export interface Medium {
  name: string;
  resource_type: "video" | "image";
  resource_value: string;
  thumbnail_url?: string;
}

export interface Checklist {
  color: string;
  icon: string;
  id: number;
  list_page_visibility: boolean;
  text: string;
}

export interface CtaText {
  name?: string;
  value?: string;
}

export interface Section {
  type: string;
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: SectionValue[];
}

export interface SectionValue {
  background_color?: string;
  background_img?: string;
  checklist_text_color?: string;
  end_at?: string;
  id?: string;
  start_at?: string;
  template?: string;
  text?: string;

  description?: string;
  has_instructor_page?: boolean;
  image?: string;
  name?: string;
  short_description?: string;
  slug?: string;

  icon?: string;
  subtitle?: string;
  title?: string;

  background?: {
    image: string;
    primary_color: string;
    secondary_color: string;
  };
  cta?: {
    clicked_url: string;
    color: string;
    text: string;
  };
  description_color?: string;
  thumbnail?: string;
  title_color?: string;
  top_left_icon_img?: string;

  color?: string;

  checklist?: string[];
  file_type?: string;
  file_url?: string;
  video_thumbnail?: string;

  profile_image?: string;
  testimonial?: string;
  thumb?: string;
  video_type?: string;
  video_url?: string;

  question?: string;
  answer?: string;
}
