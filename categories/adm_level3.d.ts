/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdmLevel3 {
  type: 'Feature';
  /**
   * Унікальний ID об'єкта
   */
  id: string;
  /**
   * Bounding boxes of geometry
   */
  bbox: BBox;
  /**
   * Геометрія об'єкта в форматі GeoJSON
   */
  geometry?: Geometry;
  /**
   * Точка центру об'єкта в форматі GeoJSON
   */
  geo_centroid: Point;
  properties: {
    /**
     * Назва об'єкта
     */
    name: string;
    /**
     * Категорії об'єкта
     */
    categories: 'adm_level3';
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code: string;
    /**
     * Назва країни
     */
    country: string;
    /**
     * Мова відповіді
     */
    lang: string;
    /**
     * Назва об'єкта адміністративного поділу
     */
    level1: string;
    /**
     * ID об'єкта адміністративного поділу
     */
    level1_id: string;
    /**
     * Назва об'єкта адміністративного поділу
     */
    level2: string;
    /**
     * ID об'єкта адміністративного поділу
     */
    level2_id: string;
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
