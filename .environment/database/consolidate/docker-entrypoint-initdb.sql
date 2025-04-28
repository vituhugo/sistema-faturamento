CREATE TABLE public.consolidation (
                                      id serial4 NOT NULL,
                                      "totalAmount" float8 NOT NULL,
                                      "numberOfRecords" int4 NOT NULL,
                                      "periodStart" timestamptz NULL,
                                      "periodEnd" timestamptz NOT NULL,
                                      "startsAtId" int4 NULL,
                                      "endsAtId" int4 NULL,
                                      CONSTRAINT "PK_30abd37e06f79b0e55873ac6d17" PRIMARY KEY (id)
);

INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (4438.91, 5, '2025-04-01T00:00:00', '2025-04-02T00:00:00', 1, 5);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (1793.87, 5, '2025-04-02T00:00:00', '2025-04-03T00:00:00', 6, 10);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7759.2, 5, '2025-04-03T00:00:00', '2025-04-04T00:00:00', 11, 15);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (542.06, 3, '2025-04-04T00:00:00', '2025-04-05T00:00:00', 16, 18);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (6532.43, 2, '2025-04-05T00:00:00', '2025-04-06T00:00:00', 19, 20);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7816.98, 3, '2025-04-06T00:00:00', '2025-04-07T00:00:00', 21, 23);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (4127.89, 6, '2025-04-07T00:00:00', '2025-04-08T00:00:00', 24, 29);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3476.64, 6, '2025-04-08T00:00:00', '2025-04-09T00:00:00', 30, 35);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (4756.79, 4, '2025-04-09T00:00:00', '2025-04-10T00:00:00', 36, 39);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (2538.66, 6, '2025-04-10T00:00:00', '2025-04-11T00:00:00', 40, 45);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (2365.99, 3, '2025-04-11T00:00:00', '2025-04-12T00:00:00', 46, 48);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (933.04, 2, '2025-04-12T00:00:00', '2025-04-13T00:00:00', 49, 50);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (666.34, 3, '2025-04-13T00:00:00', '2025-04-14T00:00:00', 51, 53);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5025.6, 6, '2025-04-14T00:00:00', '2025-04-15T00:00:00', 54, 59);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (8770.93, 6, '2025-04-15T00:00:00', '2025-04-16T00:00:00', 60, 65);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7601.23, 5, '2025-04-16T00:00:00', '2025-04-17T00:00:00', 66, 70);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5540.58, 3, '2025-04-17T00:00:00', '2025-04-18T00:00:00', 71, 73);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3052.19, 2, '2025-04-18T00:00:00', '2025-04-19T00:00:00', 74, 75);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9773.75, 2, '2025-04-19T00:00:00', '2025-04-20T00:00:00', 76, 77);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9023.32, 2, '2025-04-20T00:00:00', '2025-04-21T00:00:00', 78, 79);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9915.1, 5, '2025-04-21T00:00:00', '2025-04-22T00:00:00', 80, 84);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (2481.62, 2, '2025-04-22T00:00:00', '2025-04-23T00:00:00', 85, 86);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5620.7, 6, '2025-04-23T00:00:00', '2025-04-24T00:00:00', 87, 92);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (4013.36, 4, '2025-04-24T00:00:00', '2025-04-25T00:00:00', 93, 96);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (1381.75, 3, '2025-04-25T00:00:00', '2025-04-26T00:00:00', 97, 99);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9800.58, 5, '2025-04-26T00:00:00', '2025-04-27T00:00:00', 100, 104);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5608.07, 2, '2025-04-27T00:00:00', '2025-04-28T00:00:00', 105, 106);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (8653.94, 4, '2025-04-28T00:00:00', '2025-04-29T00:00:00', 107, 110);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5680.24, 2, '2025-04-29T00:00:00', '2025-04-30T00:00:00', 111, 112);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (8412.64, 4, '2025-04-30T00:00:00', '2025-05-01T00:00:00', 113, 116);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7295.15, 6, '2025-05-01T00:00:00', '2025-05-02T00:00:00', 117, 122);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (1891.98, 6, '2025-05-02T00:00:00', '2025-05-03T00:00:00', 123, 128);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7733.8, 4, '2025-05-03T00:00:00', '2025-05-04T00:00:00', 129, 132);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (7242.93, 2, '2025-05-04T00:00:00', '2025-05-05T00:00:00', 133, 134);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9494.7, 3, '2025-05-05T00:00:00', '2025-05-06T00:00:00', 135, 137);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (2698.3, 6, '2025-05-06T00:00:00', '2025-05-07T00:00:00', 138, 143);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9974.95, 5, '2025-05-07T00:00:00', '2025-05-08T00:00:00', 144, 148);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (2815.15, 5, '2025-05-08T00:00:00', '2025-05-09T00:00:00', 149, 153);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3574.89, 5, '2025-05-09T00:00:00', '2025-05-10T00:00:00', 154, 158);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (9446.67, 3, '2025-05-10T00:00:00', '2025-05-11T00:00:00', 159, 161);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (8366.94, 6, '2025-05-11T00:00:00', '2025-05-12T00:00:00', 162, 167);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (6487.79, 6, '2025-05-12T00:00:00', '2025-05-13T00:00:00', 168, 173);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (1749.47, 5, '2025-05-13T00:00:00', '2025-05-14T00:00:00', 174, 178);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (6690.98, 4, '2025-05-14T00:00:00', '2025-05-15T00:00:00', 179, 182);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (5339.38, 6, '2025-05-15T00:00:00', '2025-05-16T00:00:00', 183, 188);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3692.76, 3, '2025-05-16T00:00:00', '2025-05-17T00:00:00', 189, 191);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (8335.73, 6, '2025-05-17T00:00:00', '2025-05-18T00:00:00', 192, 197);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3863.84, 2, '2025-05-18T00:00:00', '2025-05-19T00:00:00', 198, 199);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (3836.95, 4, '2025-05-19T00:00:00', '2025-05-20T00:00:00', 200, 203);
INSERT INTO public.consolidation ("totalAmount", "numberOfRecords", "periodStart", "periodEnd", "startsAtId", "endsAtId") VALUES (4201.81, 2, '2025-05-20T00:00:00', '2025-05-21T00:00:00', 204, 205);