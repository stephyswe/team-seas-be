import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from './../../prisma/prisma.service';
import { OrderByParams } from '../graphql';
import { DonationCreateInput } from '../@generated/prisma-nestjs-graphql/donation/donation-create.input';

@Injectable()
export class DonationsService {
  constructor(private prisma: PrismaService) {}
  create(createDonationInput: DonationCreateInput) {
    return this.prisma.donation.create({ data: createDonationInput });
  }

  async findAll(orderBy?: OrderByParams) {
    const { field = 'createdAt', direction = 'desc' } = orderBy || {};
    return this.prisma.donation.findMany({
      orderBy: { [field]: direction },
    });
  }

  findOne(donationWhereUniqueInput: Prisma.DonationWhereUniqueInput) {
    return this.prisma.donation.findUnique({ where: donationWhereUniqueInput });
  }
}
