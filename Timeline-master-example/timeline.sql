/*
SQLyog Community Edition- MySQL GUI v8.05 
MySQL - 5.5.16-log : Database - bfsdemo
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*Table structure for table `timeline` */

DROP TABLE IF EXISTS `timeline`;

CREATE TABLE `timeline` (
  `title` varchar(200) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `display_date` varchar(100) DEFAULT NULL,
  `photo_url` varchar(200) DEFAULT NULL,
  `caption` varchar(100) DEFAULT NULL,
  `body` text,
  `read_more` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

/*Data for the table `timeline` */

insert  into `timeline`(`title`,`date`,`display_date`,`photo_url`,`caption`,`body`,`read_more`) values ('Peregrine Falcon Adult, Morro Bay, CA 27 May 2008','May 27, 2008','May 27','http://eomjeein.com/img/portfolio/bg-fixed-img-001.jpg','Mike Baird','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu','http://www.flickr.com/photos/mikebaird/2529507825/'),
('Aenean commodo ligula eget dolor.','March 3, 2009','Mar 3','','','Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qu','http://www.google.com'),
('Snowy Egret (Egretta thula) with crown extended','October 6, 2009','Oct 6','http://builtbybalance.com/github-timeline/pic2.jpg','Mike Baird','Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.','http://www.flickr.com/photos/mikebaird/3988717588/'),('Long-billed Curlew, Numenius americanus, bird, in evening sun, on Morro','August 21, 2008','Aug 21','http://builtbybalance.com/github-timeline/pic4.jpg','Mike Baird','Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.','http://www.flickr.com/photos/mikebaird/2786060728/'),('','October 8, 2009','Oct 8','','','Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro',''),('The quick, brown fox jumps over a lazy dog.','Feb 4, 2011','Feb 5','','','Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pro',''),('Spotted Dove','October 27, 2011','Oct 27','http://builtbybalance.com/github-timeline/pic1.jpg','Nagesh Kamath','Sed posuere consectetur est at lobortis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed diam eget risus varius blandit sit amet non magna.','http://www.flickr.com/photos/nagesh_kamath/7106670413/in/pool-809956@N25/');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;