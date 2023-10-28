/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdmSettlement {
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
    categories: 'adm_settlement';
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
    level1?: string;
    /**
     * ID об'єкта адміністративного поділу
     */
    level1_id?: string;
    /**
     * Назва об'єкта адміністративного поділу
     */
    level2?: string;
    /**
     * ID об'єкта адміністративного поділу
     */
    level2_id?: string;
    /**
     * Назва об'єкта адміністративного поділу
     */
    level3?: string;
    /**
     * ID об'єкта адміністративного поділу
     */
    level3_id?: string;
    /**
     * Тип населеного пункту
     */
    type: string;
    /**
     * Клас населеного пункту
     */
    class:
      | 'national capital'
      | 'city millionaire'
      | '1st order admin capital'
      | '2nd order admin capital'
      | '3rd order admin capital'
      | 'town'
      | 'city'
      | 'village';
    /**
     * Додатковий унікальний ID відповідно до офіційного регіонального класифікатора
     */
    gov_id?: string;
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
