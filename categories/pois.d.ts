/* eslint-disable */

import { Point, Geometry, BBox } from 'geojson';

export interface Pois {
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
    categories: string;
    /**
     * Мова відповіді
     */
    lang: string;
    /**
     * Адреса
     */
    address?: string;
    /**
     * Уточнення до адреси
     */
    address_info?: string;
    /**
     * ISO 3166-1 alpha-2, двохбуквений код країни
     */
    country_code?: string;
    /**
     * Дата створення (для пам'яток)
     */
    creation_data?: string;
    /**
     * Автор (для пам'яток)
     */
    creator?: string;
    /**
     * Опис об'єкта
     */
    description?: string;
    /**
     * Email
     */
    email?: string;
    /**
     * Список телефонів
     */
    phones?: string[];
    /**
     * Сайт
     */
    site_url?: string;
    /**
     * Кількість зірочок для готелів
     */
    star?: number;
    /**
     * Вітрина об'єкта
     */
    vitrine?: string;
    /**
     * Працює цілодобово
     */
    w24hours?: boolean;
    /**
     * Фото 1
     */
    photo1?: number;
    /**
     * Фото 2
     */
    photo2?: number;
    /**
     * Фото 3
     */
    photo3?: number;
    /**
     * Копірайт
     */
    copyright?: string;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
