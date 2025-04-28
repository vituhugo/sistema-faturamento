import { Test, TestingModule } from '@nestjs/testing';
import { ConsolidationController } from './consolidation.controller';
import { ConsolidationService } from './consolidation.service';

describe('ConsolidationController', () => {
  let controller: ConsolidationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ConsolidationController],
      providers: [ConsolidationService],
    }).compile();

    controller = module.get<ConsolidationController>(ConsolidationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
