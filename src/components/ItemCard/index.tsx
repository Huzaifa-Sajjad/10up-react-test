import Image from 'next/image';
import React, { FC, ReactElement } from 'react';
import { Card, CardContent, Link, Text, View } from 'vcc-ui';
import { ICarLiting } from '../../types/Listing';
import styles from './styles.module.css';

interface IItemCardProps {
  carListing: ICarLiting;
}

const ItemCard: FC<IItemCardProps> = ({ carListing }): ReactElement => {
  const { id, bodyType, imageUrl, modelName, modelType } = carListing;
  return (
    <Card className={styles.card}>
      <CardContent>
        <View spacing={1}>
          <View>
            <Text variant='bates' className={styles.bodyType}>
              {bodyType}
            </Text>
          </View>
          <View direction='row' alignItems='center' spacing={1}>
            <Text subStyle='emphasis' className={styles.carName}>
              {modelName}
            </Text>
            <Text variant='bates' className={styles.modalType}>
              {modelType}
            </Text>
          </View>
          <View>
            <Image
              src={imageUrl}
              alt={modelName}
              width='200px'
              height='200px'
              className={styles.carImage}
            />
          </View>
          <View direction='row' justifyContent='center' spacing={1}>
            <View>
              <Link href={`/learn/${id}`} arrow='right'>
                Learn
              </Link>
            </View>
            <View>
              <Link href={`/shop/${id}`} arrow='right'>
                Shop
              </Link>
            </View>
          </View>
        </View>
      </CardContent>
    </Card>
  );
};

export default ItemCard;
