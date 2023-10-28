/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdmLevel1 {
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
    categories: 'adm_level1';
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code: string;
    /**
     * Мова відповіді
     */
    lang: string;
    /**
     * Назва країни
     */
    country: string;
    /**
     * Назва центру об'єкта адміністративного поділу
     */
    admin_center?: string;
    /**
     * ID центру, населеного пункту з adm_settlements
     */
    admin_center_id?: string;
    /**
     * Додатковий унікальний ID відповідно до офіційного регіонального класифікатора
     */
    gov_id?: string;
    /**
     * Копірайт
     */
    copyright?: string;
    /**
     * Масив об'єктів адміністративного поділу наступного рівня
     */
    levels2: {
      /**
       * Унікальний ID об'єкта
       */
      id?: string;
      /**
       * Назва
       */
      name?: string;
      [k: string]: unknown;
    }[];
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
