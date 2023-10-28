/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface AdrAddress {
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
     * Адреса
     */
    name: string;
    /**
     * Категорії об'єкта
     */
    categories: string;
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code?: string;
    /**
     * Назва країни
     */
    country?: string;
    /**
     * Поштовий індекс
     */
    postal_code?: string;
    /**
     * ID об'єкта з шару adr_street
     */
    street_id: string;
    /**
     * Мова відповіді
     */
    lang: string;
    /**
     * Назва вулиці
     */
    street: string;
    /**
     * Тип вулиці
     */
    street_type: string;
    /**
     * Уточнюючий район
     */
    zone?: string;
    /**
     * ID населеного пункту з adm_settlements
     */
    settlement_id?: string;
    /**
     * Назва населенного пункта
     */
    settlement: string;
    /**
     * Тип населеного пункту
     */
    settlement_type: string;
    /**
     * Висота будівлі в метрах
     */
    height?: number;
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
