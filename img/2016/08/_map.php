<?php
/**
 * Created by PhpStorm.
 * User: egoss
 * Date: 01.03.2018
 * Time: 16:44
 */

?>

<section class="s-supplier">
    <div class="container">

        <h3 class="h3 title-head text-center"><?= Yii::t('app/map', 'Наши поставщики h3')?></h3>
        <hr class="small-divider">
        <p class="block-description"><?= Yii::t('app/map', 'Мы работаем с ведущими поставщиками основых <br>винодельческих регионов мира')?></p>
        <div class="row" id="wine-map">
            <div class="col-sm-12 col-md-6 col-lg-7 pt-xs hidden-sm hidden-xs">
                <div class="ammap-container">
                    <div id="chartdiv"></div>
                </div>

            </div>
            <div class="col-sm-12 col-md-6 col-lg-5 pt-xs">

                <ul class="select-group">
                    <li>
                        <select name="country"  id="selectCountry" class="js-example-basic-single"></select>
                    </li>
                    <li>
                        <select name="region" id="selectRegion" class="js-example-basic-single"></select>
                    </li>
                    <li>
                        <select name="brand" id="selectBrand" class="js-example-basic-single"></select>
                    </li>
                </ul>

                <div class="supplier-description">
                    <h6 class="supplier-name"></h6>

                    <div class="supplier-logo hidden">
                        <!--<img src="https://via.placeholder.com/350x150" alt="Alt">-->
                    </div>
                    <p class="supplier-text hidden">
                    </p>

                    <a href="#" class="btn btn-sm accent-btn supplier-url"><?= Yii::t('app/map', 'Подробнее')?></a>
                </div>

            </div>
        </div>
    </div>
</section>