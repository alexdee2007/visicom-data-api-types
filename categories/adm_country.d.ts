/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdmCountry {
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
    categories: 'adm_country';
    /**
     * Мова відповіді
     */
    lang: string;
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code?: string;
    /**
     * Назва столиці
     */
    admin_center?: string;
    /**
     * ID столиці з adm_settlements
     */
    admin_center_id?: string;
    /**
     * Копірайт
     */
    copyright?: string;
    /**
     * Масив об'єктів адміністративного поділу наступного рівня
     */
    levels1?: {
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
