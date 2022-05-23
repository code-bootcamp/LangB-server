import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { Cache } from 'cache-manager';

@Injectable()
export class SearchService {
  constructor(
    private readonly elasticsearchService: ElasticsearchService, //

    @Inject(CACHE_MANAGER)
    private readonly cacheManager: Cache,
  ) {}

  async redisGetAll({ content }) {
    const mycache = await this.cacheManager.get(content);
    return mycache;
  }

  async elasticSearchAll({ content }) {
    const result = await this.elasticsearchService.search({
      index: 'boardcontent',
      body: {
        query: {
          match: { content: content },
        },
      },
    });
    return JSON.stringify(result, null, '  ');
  }

  async elasticSearchCommnuinity({ content }) {
    const result = await this.elasticsearchService.search({
      index: 'communitycontent',
      body: {
        query: {
          match: { content: content },
        },
      },
    });
    return JSON.stringify(result, null, '  ');
  }

  async redisSaveAll({ content, values }) {
    await this.cacheManager.set(
      content, //
      values,
      {
        ttl: 100,
      },
    );
  }
}
