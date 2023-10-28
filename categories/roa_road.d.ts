/* eslint-disable */

import { Geometry, BBox } from 'geojson';

export interface RoaRoad {
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
  properties: {
    /**
     * Категорії об'єкта
     */
    categories: 'roa_road';
    /**
     * ID початку дороги
     */
    start_id: string;
    /**
     * ID кінця дороги
     */
    finish_id: string;
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code?: string;
    /**
     * Назва початку дороги
     */
    start?: string;
    /**
     * Назва кінця дороги
     */
    finish?: string;
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
