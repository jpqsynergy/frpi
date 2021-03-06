<?php

/**
 * Created by PhpStorm.
 * User: Jessryll
 * Date: 4/22/2016
 * Time: 8:33 PM
 */
namespace App\Repo\Dimensions;
interface DimensionRepository
{
    /**
     * @return mixed
     */
    public function getAll();

    /**
     * @param $id
     * @return mixed
     */
    public function getById($id);

    /**
     * @param array $attribute
     * @return mixed
     */
    public function create(array $attribute);

    /**
     * @param $id
     * @param array $attribute
     * @return mixed
     */
    public function update($id, array $attribute);

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id);
}