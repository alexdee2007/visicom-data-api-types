/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdrStreet {
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
     * Назва об'єкта на английском
     */
    name_en?: string;
    /**
     * Попередня назва об'єкта
     */
    old_name?: string;
    /**
     * Категорії об'єкта
     */
    categories: 'adr_street';
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
     * ID населеного пункту з adm_settlements
     */
    settlement_id: string;
    /**
     * Уточнюючий район
     */
    zone?: string;
    /**
     * Тип вулиці
     */
    type: string;
    /**
     * Назва населенного пункта
     */
    settlement: string;
    /**
     * Тип населеного пункту
     */
    settlement_type: string;
    /**
     * Клас населеного пункту
     */
    settlement_class: string;
    /**
     * Масив адрес вулиці
     */
    address?: {
      /**
       * ID адреси з adr_address
       */
      id?: string;
      /**
       * Адреса
       */
      name?: string;
      [k: string]: unknown;
    }[];
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
