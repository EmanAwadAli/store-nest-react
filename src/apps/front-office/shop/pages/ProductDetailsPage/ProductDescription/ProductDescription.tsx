import { trans } from "@mongez/localization";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "app/design-system/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "app/design-system/components/ui/tabs";
import { getLocalizedValue } from "apps/front-office/utils/localization";
import { Product } from "apps/front-office/utils/types";

export type ProductDescriptionProps = {
  product: Product;
};
export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <Tabs
      defaultValue="description"
      className="w-full px-4 py-5 md:p-10 border border-gray-200 rounded-2xl">
      <TabsList>
        <TabsTrigger value="description">{trans("description")}</TabsTrigger>
        <TabsTrigger value="additionalInfo">
          {trans("additionalInfo")}
        </TabsTrigger>
        <TabsTrigger value="reviews">{trans("reviews")}</TabsTrigger>
      </TabsList>
      <TabsContent
        value="description"
        className="text-sm text-gray-500 font-semibold leading-7">
        <div
          dangerouslySetInnerHTML={{
            __html: getLocalizedValue(product?.description || []),
          }}
        />
      </TabsContent>
      <TabsContent value="additionalInfo">
        <Table className="border border-gray-200">
          <TableBody>
            {product?.type && (
              <TableRow>
                <TableHead>{trans("type")}</TableHead>
                <TableCell>{product?.type}</TableCell>
              </TableRow>
            )}
            {product?.category && (
              <TableRow>
                <TableHead>{trans("category")}</TableHead>
                <TableCell>
                  {getLocalizedValue(product?.category?.name)}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TabsContent>
      <TabsContent value="reviews">Reviews</TabsContent>
    </Tabs>
  );
}
